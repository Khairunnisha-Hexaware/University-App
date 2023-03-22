using NSubstitute;
using Backend.Test.Framework;
using Backend.Business.Services;
using Backend.Data.Interfaces;

namespace Backend.Test.Business.ElectricalandElectronicsEngineeringServiceSpec
{
    public abstract class UsingElectricalandElectronicsEngineeringServiceSpec : SpecFor<ElectricalandElectronicsEngineeringService>
    {
        protected IElectricalandElectronicsEngineeringRepository _electricalandelectronicsengineeringRepository;

        public override void Context()
        {
            _electricalandelectronicsengineeringRepository = Substitute.For<IElectricalandElectronicsEngineeringRepository>();
            subject = new ElectricalandElectronicsEngineeringService(_electricalandelectronicsengineeringRepository);

        }

    }
}
