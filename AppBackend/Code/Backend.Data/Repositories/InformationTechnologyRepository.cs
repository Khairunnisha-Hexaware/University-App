using Backend.Data.Interfaces;
using Backend.Entities.Entities;
using System.Collections.Generic;
using System.Linq;

namespace Backend.Data.Repositories
{
    public class InformationTechnologyRepository : IInformationTechnologyRepository
    {
        private readonly DataContext _context;        

        public InformationTechnologyRepository(DataContext context)
        {
            _context = context;
        }
        public IEnumerable<InformationTechnology> GetAll()
        {            
            return _context.InformationTechnology.ToList();
        }

        public bool Save(InformationTechnology entity)
        {
            if (entity == null)
            return false;
            _context.InformationTechnology.Add(entity);
            var created= _context.SaveChanges();
            return created>0;
        }

        public InformationTechnology Update(InformationTechnology entity)
        {     
             _context.InformationTechnology.Update(entity);
            _context.SaveChanges();
            return entity;
        }

        public bool Delete(int id)
        {          

            int deleted = 0;
            var entity = _context.InformationTechnology.FirstOrDefault(x => x.Id == id);
            if (entity != null)
            {
                _context.Remove(entity);
                deleted = _context.SaveChanges();
            }
            return deleted > 0;
        }
        public InformationTechnology GetById(int id)
        {
            return _context.InformationTechnology.FirstOrDefault(x => x.Id == id);            
             
        }
    }
}
