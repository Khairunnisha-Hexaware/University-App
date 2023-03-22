using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Backend.Entities.Entities;

namespace Backend.Test.Business.InformationTechnologyServiceSpec
{
    public class When_saving_informationtechnology : UsingInformationTechnologyServiceSpec
    {
        private InformationTechnology _result;

        private InformationTechnology _informationtechnology;

        public override void Context()
        {
            base.Context();

            _informationtechnology = new InformationTechnology
            {
                coursename = "coursename",
                coursedescription = "coursedescription",
                coursetype = "coursetype",
                duration = 41,
                coursefee = 64
            };

            _informationtechnologyRepository.Save(_informationtechnology).Returns(true);
        }
        public override void Because()
        {
            _result = subject.Save(_informationtechnology);
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _informationtechnologyRepository.Received(1).Save(_informationtechnology);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<InformationTechnology>();

            _result.ShouldBe(_informationtechnology);
        }
    }
}
