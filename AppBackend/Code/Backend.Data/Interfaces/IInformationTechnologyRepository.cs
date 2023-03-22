using Backend.Entities.Entities;


namespace Backend.Data.Interfaces
{
    public interface IInformationTechnologyRepository : IGetById<InformationTechnology>, IGetAll<InformationTechnology>, ISave<InformationTechnology>, IUpdate<InformationTechnology>, IDelete<int>
    {
    }
}
