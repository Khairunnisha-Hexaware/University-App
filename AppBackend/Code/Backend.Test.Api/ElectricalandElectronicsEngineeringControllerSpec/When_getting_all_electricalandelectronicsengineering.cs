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
    public class When_getting_all_electricalandelectronicsengineering : UsingElectricalandElectronicsEngineeringControllerSpec
    {
        private ActionResult<IEnumerable<ElectricalandElectronicsEngineering>> _result;

        private IEnumerable<ElectricalandElectronicsEngineering> _all_electricalandelectronicsengineering;
        private ElectricalandElectronicsEngineering _electricalandelectronicsengineering;

        public override void Context()
        {
            base.Context();

            _electricalandelectronicsengineering = new ElectricalandElectronicsEngineering{
                coursename = "coursename",
                coursedescription = "coursedescription",
                coursetype = "coursetype",
                duration = 46,
                coursefee = 43
            };

            _all_electricalandelectronicsengineering = new List<ElectricalandElectronicsEngineering> { _electricalandelectronicsengineering};
            _electricalandelectronicsengineeringService.GetAll().Returns(_all_electricalandelectronicsengineering);
        }
        public override void Because()
        {
            _result = subject.Get();
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _electricalandelectronicsengineeringService.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<List<ElectricalandElectronicsEngineering>>();

            List<ElectricalandElectronicsEngineering> resultList = resultListObject as List<ElectricalandElectronicsEngineering>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_electricalandelectronicsengineering);
        }
    }
}
