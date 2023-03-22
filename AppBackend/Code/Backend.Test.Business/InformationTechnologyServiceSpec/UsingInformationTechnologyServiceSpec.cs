using NSubstitute;
using Backend.Test.Framework;
using Backend.Business.Services;
using Backend.Data.Interfaces;

namespace Backend.Test.Business.InformationTechnologyServiceSpec
{
    public abstract class UsingInformationTechnologyServiceSpec : SpecFor<InformationTechnologyService>
    {
        protected IInformationTechnologyRepository _informationtechnologyRepository;

        public override void Context()
        {
            _informationtechnologyRepository = Substitute.For<IInformationTechnologyRepository>();
            subject = new InformationTechnologyService(_informationtechnologyRepository);

        }

    }
}
