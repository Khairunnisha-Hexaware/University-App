using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Microsoft.AspNetCore.Mvc;
using Backend.Entities.Entities;

namespace Backend.Test.Api.ElectricalandElectronicsEngineeringControllerSpec
{
    public class When_updating_electricalandelectronicsengineering : UsingElectricalandElectronicsEngineeringControllerSpec
    {
        private ActionResult<ElectricalandElectronicsEngineering > _result;
        private ElectricalandElectronicsEngineering _electricalandelectronicsengineering;

        public override void Context()
        {
            base.Context();

            _electricalandelectronicsengineering = new ElectricalandElectronicsEngineering
            {
                coursename = "coursename",
                coursedescription = "coursedescription",
                coursetype = "coursetype",
                duration = 79,
                coursefee = 89
            };

            _electricalandelectronicsengineeringService.Update( _electricalandelectronicsengineering).Returns(_electricalandelectronicsengineering);
            
        }
        public override void Because()
        {
            _result = subject.Update( _electricalandelectronicsengineering);
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _electricalandelectronicsengineeringService.Received(1).Update( _electricalandelectronicsengineering);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<ElectricalandElectronicsEngineering>();

            var resultList = resultListObject as ElectricalandElectronicsEngineering;

            resultList.ShouldBe(_electricalandelectronicsengineering);
        }
    }
}
