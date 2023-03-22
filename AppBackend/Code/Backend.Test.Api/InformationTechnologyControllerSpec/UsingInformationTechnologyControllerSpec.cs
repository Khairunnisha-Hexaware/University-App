using NSubstitute;
using Backend.Test.Framework;
using Backend.Api.Controllers;
using Backend.Business.Interfaces;


namespace Backend.Test.Api.InformationTechnologyControllerSpec
{
    public abstract class UsingInformationTechnologyControllerSpec : SpecFor<InformationTechnologyController>
    {
        protected IInformationTechnologyService _informationtechnologyService;

        public override void Context()
        {
            _informationtechnologyService = Substitute.For<IInformationTechnologyService>();
            subject = new InformationTechnologyController(_informationtechnologyService);

        }

    }
}
