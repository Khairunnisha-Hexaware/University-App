using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Backend.Entities.Entities;


namespace Backend.Test.Business.ElectricalandElectronicsEngineeringServiceSpec
{
    public class When_updating_electricalandelectronicsengineering : UsingElectricalandElectronicsEngineeringServiceSpec
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
                duration = 18,
                coursefee = 35
            };

            _electricalandelectronicsengineeringRepository.Update( _electricalandelectronicsengineering).Returns(_electricalandelectronicsengineering);
            
        }
        public override void Because()
        {
            _result = subject.Update( _electricalandelectronicsengineering);
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _electricalandelectronicsengineeringRepository.Received(1).Update( _electricalandelectronicsengineering);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<ElectricalandElectronicsEngineering>();

            _result.ShouldBe(_electricalandelectronicsengineering);
        }
    }
}
