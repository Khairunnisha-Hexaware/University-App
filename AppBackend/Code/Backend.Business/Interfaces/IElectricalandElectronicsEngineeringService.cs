using Backend.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.Business.Interfaces
{
    public interface IElectricalandElectronicsEngineeringService
    {      
        IEnumerable<ElectricalandElectronicsEngineering> GetAll();
        ElectricalandElectronicsEngineering Save(ElectricalandElectronicsEngineering classification);
        ElectricalandElectronicsEngineering Update(ElectricalandElectronicsEngineering classification);
        bool Delete(int id);
        ElectricalandElectronicsEngineering  GetById(int id);

    }
}
