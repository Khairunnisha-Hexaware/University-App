using System.Collections.Generic;
using Backend.Business.Interfaces;
using Backend.Entities.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ElectricalandElectronicsEngineeringController : ControllerBase
    {
        IElectricalandElectronicsEngineeringService _ElectricalandElectronicsEngineeringService;
        public ElectricalandElectronicsEngineeringController(IElectricalandElectronicsEngineeringService ElectricalandElectronicsEngineeringService)
        {
            _ElectricalandElectronicsEngineeringService = ElectricalandElectronicsEngineeringService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ElectricalandElectronicsEngineering>> Get()
        {
            return Ok(_ElectricalandElectronicsEngineeringService.GetAll());
        }

        [HttpPost]
        public ActionResult<ElectricalandElectronicsEngineering> Save(ElectricalandElectronicsEngineering ElectricalandElectronicsEngineering)
        {
            return Ok(_ElectricalandElectronicsEngineeringService.Save(ElectricalandElectronicsEngineering));

        }

        [HttpPut]
        public ActionResult<ElectricalandElectronicsEngineering> Update( ElectricalandElectronicsEngineering ElectricalandElectronicsEngineering)
        {
            return Ok(_ElectricalandElectronicsEngineeringService.Update(ElectricalandElectronicsEngineering));

        }

        [HttpDelete]
        public ActionResult<bool> Delete(int id)
        {
            return Ok(_ElectricalandElectronicsEngineeringService.Delete(id));

        }
        [HttpGet("{id:int}")]
        public ActionResult<ElectricalandElectronicsEngineering> GetById(int id)
        {
            return Ok(_ElectricalandElectronicsEngineeringService.GetById(id));
        }

    }
}
