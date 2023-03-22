using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Backend.Entities.Entities;

namespace Backend.Test.Business.ElectricalandElectronicsEngineeringServiceSpec
{
    public class When_saving_electricalandelectronicsengineering : UsingElectricalandElectronicsEngineeringServiceSpec
    {
        private ElectricalandElectronicsEngineering _result;

        private ElectricalandElectronicsEngineering _electricalandelectronicsengineering;

        public override void Context()
        {
            base.Context();

            _electricalandelectronicsengineering = new ElectricalandElectronicsEngineering
            {
                coursename = "coursename",
                coursedescription = "coursedescription",
                coursetype = "coursetype",
                duration = 14,
                coursefee = 100
            };

            _electricalandelectronicsengineeringRepository.Save(_electricalandelectronicsengineering).Returns(true);
        }
        public override void Because()
        {
            _result = subject.Save(_electricalandelectronicsengineering);
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _electricalandelectronicsengineeringRepository.Received(1).Save(_electricalandelectronicsengineering);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<ElectricalandElectronicsEngineering>();

            _result.ShouldBe(_electricalandelectronicsengineering);
        }
    }
}
