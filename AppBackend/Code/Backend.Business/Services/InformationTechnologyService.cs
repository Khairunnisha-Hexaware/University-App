using Backend.Business.Interfaces;
using Backend.Data.Interfaces;
using Backend.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.Business.Services
{
    public class InformationTechnologyService : IInformationTechnologyService
    {
        IInformationTechnologyRepository _InformationTechnologyRepository;

        public InformationTechnologyService(IInformationTechnologyRepository InformationTechnologyRepository)
        {
           this._InformationTechnologyRepository = InformationTechnologyRepository;
        }
        public IEnumerable<InformationTechnology> GetAll()
        {
            return _InformationTechnologyRepository.GetAll();
        }

        public InformationTechnology Save(InformationTechnology InformationTechnology)
        {
            _InformationTechnologyRepository.Save(InformationTechnology);
            return InformationTechnology;
        }

        public InformationTechnology Update(InformationTechnology InformationTechnology)
        {
            return _InformationTechnologyRepository.Update( InformationTechnology);
        }

        public bool Delete(int id)
        {
            return _InformationTechnologyRepository.Delete(id);
        }
        public InformationTechnology GetById(int id)
        {
            return _InformationTechnologyRepository.GetById(id);
        }
    }
}
