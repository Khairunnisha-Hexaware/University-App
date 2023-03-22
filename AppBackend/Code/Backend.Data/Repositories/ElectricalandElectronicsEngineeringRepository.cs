using Backend.Data.Interfaces;
using Backend.Entities.Entities;
using System.Collections.Generic;
using System.Linq;

namespace Backend.Data.Repositories
{
    public class ElectricalandElectronicsEngineeringRepository : IElectricalandElectronicsEngineeringRepository
    {
        private readonly DataContext _context;        

        public ElectricalandElectronicsEngineeringRepository(DataContext context)
        {
            _context = context;
        }
        public IEnumerable<ElectricalandElectronicsEngineering> GetAll()
        {            
            return _context.ElectricalandElectronicsEngineering.ToList();
        }

        public bool Save(ElectricalandElectronicsEngineering entity)
        {
            if (entity == null)
            return false;
            _context.ElectricalandElectronicsEngineering.Add(entity);
            var created= _context.SaveChanges();
            return created>0;
        }

        public ElectricalandElectronicsEngineering Update(ElectricalandElectronicsEngineering entity)
        {     
             _context.ElectricalandElectronicsEngineering.Update(entity);
            _context.SaveChanges();
            return entity;
        }

        public bool Delete(int id)
        {          

            int deleted = 0;
            var entity = _context.ElectricalandElectronicsEngineering.FirstOrDefault(x => x.Id == id);
            if (entity != null)
            {
                _context.Remove(entity);
                deleted = _context.SaveChanges();
            }
            return deleted > 0;
        }
        public ElectricalandElectronicsEngineering GetById(int id)
        {
            return _context.ElectricalandElectronicsEngineering.FirstOrDefault(x => x.Id == id);            
             
        }
    }
}
