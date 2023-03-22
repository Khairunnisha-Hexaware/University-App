using Backend.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.Business.Interfaces
{
    public interface IInformationTechnologyService
    {      
        IEnumerable<InformationTechnology> GetAll();
        InformationTechnology Save(InformationTechnology classification);
        InformationTechnology Update(InformationTechnology classification);
        bool Delete(int id);
        InformationTechnology  GetById(int id);

    }
}
