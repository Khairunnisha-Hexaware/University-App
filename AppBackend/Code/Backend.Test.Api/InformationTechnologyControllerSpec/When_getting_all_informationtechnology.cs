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
    public class When_getting_all_informationtechnology : UsingInformationTechnologyControllerSpec
    {
        private ActionResult<IEnumerable<InformationTechnology>> _result;

        private IEnumerable<InformationTechnology> _all_informationtechnology;
        private InformationTechnology _informationtechnology;

        public override void Context()
        {
            base.Context();

            _informationtechnology = new InformationTechnology{
                coursename = "coursename",
                coursedescription = "coursedescription",
                coursetype = "coursetype",
                duration = 84,
                coursefee = 13
            };

            _all_informationtechnology = new List<InformationTechnology> { _informationtechnology};
            _informationtechnologyService.GetAll().Returns(_all_informationtechnology);
        }
        public override void Because()
        {
            _result = subject.Get();
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _informationtechnologyService.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<List<InformationTechnology>>();

            List<InformationTechnology> resultList = resultListObject as List<InformationTechnology>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_informationtechnology);
        }
    }
}
