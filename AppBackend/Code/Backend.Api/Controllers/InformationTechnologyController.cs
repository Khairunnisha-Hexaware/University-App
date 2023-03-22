using System.Collections.Generic;
using Backend.Business.Interfaces;
using Backend.Entities.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class InformationTechnologyController : ControllerBase
    {
        IInformationTechnologyService _InformationTechnologyService;
        public InformationTechnologyController(IInformationTechnologyService InformationTechnologyService)
        {
            _InformationTechnologyService = InformationTechnologyService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<InformationTechnology>> Get()
        {
            return Ok(_InformationTechnologyService.GetAll());
        }

        [HttpPost]
        public ActionResult<InformationTechnology> Save(InformationTechnology InformationTechnology)
        {
            return Ok(_InformationTechnologyService.Save(InformationTechnology));

        }

        [HttpPut]
        public ActionResult<InformationTechnology> Update( InformationTechnology InformationTechnology)
        {
            return Ok(_InformationTechnologyService.Update(InformationTechnology));

        }

        [HttpDelete]
        public ActionResult<bool> Delete(int id)
        {
            return Ok(_InformationTechnologyService.Delete(id));

        }
        [HttpGet("{id:int}")]
        public ActionResult<InformationTechnology> GetById(int id)
        {
            return Ok(_InformationTechnologyService.GetById(id));
        }

    }
}
