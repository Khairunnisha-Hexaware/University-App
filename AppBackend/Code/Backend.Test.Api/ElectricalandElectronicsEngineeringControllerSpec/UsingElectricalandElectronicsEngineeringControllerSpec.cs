using NSubstitute;
using Backend.Test.Framework;
using Backend.Api.Controllers;
using Backend.Business.Interfaces;


namespace Backend.Test.Api.ElectricalandElectronicsEngineeringControllerSpec
{
    public abstract class UsingElectricalandElectronicsEngineeringControllerSpec : SpecFor<ElectricalandElectronicsEngineeringController>
    {
        protected IElectricalandElectronicsEngineeringService _electricalandelectronicsengineeringService;

        public override void Context()
        {
            _electricalandelectronicsengineeringService = Substitute.For<IElectricalandElectronicsEngineeringService>();
            subject = new ElectricalandElectronicsEngineeringController(_electricalandelectronicsengineeringService);

        }

    }
}
