using System.ComponentModel.DataAnnotations;

namespace CMSSearchPortalApi.Models
{
    public class ContactType
    {
        [Key]
        public int Id { get; set; }
        public string? Contact_Code { get; set; }
        public string? Contact_Description { get; set; }
        public string? Status { get; set; }
        public DateTime CreatedDate { get; set; }       
    }
}
