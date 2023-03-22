using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Backend.Entities.Entities;

namespace Backend.Test.Business.ElectricalandElectronicsEngineeringServiceSpec
{
    public class When_getting_all_electricalandelectronicsengineering : UsingElectricalandElectronicsEngineeringServiceSpec
    {
        private IEnumerable<ElectricalandElectronicsEngineering> _result;

        private IEnumerable<ElectricalandElectronicsEngineering> _all_electricalandelectronicsengineering;
        private ElectricalandElectronicsEngineering _electricalandelectronicsengineering;

        public override void Context()
        {
            base.Context();

            _electricalandelectronicsengineering = new ElectricalandElectronicsEngineering{
                coursename = "coursename",
                coursedescription = "coursedescription",
                coursetype = "coursetype",
                duration = 95,
                coursefee = 49
            };

            _all_electricalandelectronicsengineering = new List<ElectricalandElectronicsEngineering> { _electricalandelectronicsengineering};
            _electricalandelectronicsengineeringRepository.GetAll().Returns(_all_electricalandelectronicsengineering);
        }
        public override void Because()
        {
            _result = subject.GetAll();
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _electricalandelectronicsengineeringRepository.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<List<ElectricalandElectronicsEngineering>>();

            List<ElectricalandElectronicsEngineering> resultList = _result as List<ElectricalandElectronicsEngineering>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_electricalandelectronicsengineering);
        }
    }
}
