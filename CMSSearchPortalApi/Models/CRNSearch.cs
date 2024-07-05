using System.ComponentModel.DataAnnotations;
using System.Runtime.ConstrainedExecution;

namespace JWTAuth.WebApi.Models
{
    public class CRNSearch
    {
        [Key]
        public int Id { get; set; }      
        public string? MPRN { get; set; }
        public string? PostalCode { get; set; }
        public string? SSC { get; set; }
        public string? CRN { get; set; }
        public string? ConfirmationNumber { get; set; }
        public string? CED { get; set; }
        public string? Priority { get; set; }
        public string? ContactHandler { get; set; }
        public string? SOSDays { get; set; }       
        public DateTime? EventDate { get; set; }
        public DateTime? LoggedDate { get; set; }
        public DateTime? ClosedDate { get; set; }

    }
}
