using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Microsoft.AspNetCore.Mvc;
using Backend.Entities.Entities;

namespace Backend.Test.Api.InformationTechnologyControllerSpec
{
    public class When_updating_informationtechnology : UsingInformationTechnologyControllerSpec
    {
        private ActionResult<InformationTechnology > _result;
        private InformationTechnology _informationtechnology;

        public override void Context()
        {
            base.Context();

            _informationtechnology = new InformationTechnology
            {
                coursename = "coursename",
                coursedescription = "coursedescription",
                coursetype = "coursetype",
                duration = 90,
                coursefee = 24
            };

            _informationtechnologyService.Update( _informationtechnology).Returns(_informationtechnology);
            
        }
        public override void Because()
        {
            _result = subject.Update( _informationtechnology);
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _informationtechnologyService.Received(1).Update( _informationtechnology);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<InformationTechnology>();

            var resultList = resultListObject as InformationTechnology;

            resultList.ShouldBe(_informationtechnology);
        }
    }
}
