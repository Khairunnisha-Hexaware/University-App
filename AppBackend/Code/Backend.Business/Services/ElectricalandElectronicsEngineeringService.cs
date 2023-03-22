using Backend.Business.Interfaces;
using Backend.Data.Interfaces;
using Backend.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.Business.Services
{
    public class ElectricalandElectronicsEngineeringService : IElectricalandElectronicsEngineeringService
    {
        IElectricalandElectronicsEngineeringRepository _ElectricalandElectronicsEngineeringRepository;

        public ElectricalandElectronicsEngineeringService(IElectricalandElectronicsEngineeringRepository ElectricalandElectronicsEngineeringRepository)
        {
           this._ElectricalandElectronicsEngineeringRepository = ElectricalandElectronicsEngineeringRepository;
        }
        public IEnumerable<ElectricalandElectronicsEngineering> GetAll()
        {
            return _ElectricalandElectronicsEngineeringRepository.GetAll();
        }

        public ElectricalandElectronicsEngineering Save(ElectricalandElectronicsEngineering ElectricalandElectronicsEngineering)
        {
            _ElectricalandElectronicsEngineeringRepository.Save(ElectricalandElectronicsEngineering);
            return ElectricalandElectronicsEngineering;
        }

        public ElectricalandElectronicsEngineering Update(ElectricalandElectronicsEngineering ElectricalandElectronicsEngineering)
        {
            return _ElectricalandElectronicsEngineeringRepository.Update( ElectricalandElectronicsEngineering);
        }

        public bool Delete(int id)
        {
            return _ElectricalandElectronicsEngineeringRepository.Delete(id);
        }
        public ElectricalandElectronicsEngineering GetById(int id)
        {
            return _ElectricalandElectronicsEngineeringRepository.GetById(id);
        }
    }
}
