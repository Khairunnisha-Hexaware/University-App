using Backend.Entities.Entities;


namespace Backend.Data.Interfaces
{
    public interface IElectricalandElectronicsEngineeringRepository : IGetById<ElectricalandElectronicsEngineering>, IGetAll<ElectricalandElectronicsEngineering>, ISave<ElectricalandElectronicsEngineering>, IUpdate<ElectricalandElectronicsEngineering>, IDelete<int>
    {
    }
}
