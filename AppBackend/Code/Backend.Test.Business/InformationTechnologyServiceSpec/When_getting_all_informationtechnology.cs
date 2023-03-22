using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Backend.Entities.Entities;

namespace Backend.Test.Business.InformationTechnologyServiceSpec
{
    public class When_getting_all_informationtechnology : UsingInformationTechnologyServiceSpec
    {
        private IEnumerable<InformationTechnology> _result;

        private IEnumerable<InformationTechnology> _all_informationtechnology;
        private InformationTechnology _informationtechnology;

        public override void Context()
        {
            base.Context();

            _informationtechnology = new InformationTechnology{
                coursename = "coursename",
                coursedescription = "coursedescription",
                coursetype = "coursetype",
                duration = 43,
                coursefee = 25
            };

            _all_informationtechnology = new List<InformationTechnology> { _informationtechnology};
            _informationtechnologyRepository.GetAll().Returns(_all_informationtechnology);
        }
        public override void Because()
        {
            _result = subject.GetAll();
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _informationtechnologyRepository.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<List<InformationTechnology>>();

            List<InformationTechnology> resultList = _result as List<InformationTechnology>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_informationtechnology);
        }
    }
}
