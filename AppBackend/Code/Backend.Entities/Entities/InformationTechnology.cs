using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Entities.Entities
{
    public class InformationTechnology
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id  { get; set; }
        public string coursename  { get; set; }
        public string coursedescription  { get; set; }
        public string coursetype  { get; set; }
        public int duration  { get; set; }
        public int coursefee  { get; set; }
        
    }

}
