using System.ComponentModel.DataAnnotations;

namespace JWTAuth.WebApi.Models
{
    public class Login
    {
        [Key]
        public int UserID { get; set; }
      //  [Display(Name = "DisplayName")]
      //  public string? DisplayName { get; set; }
      //  [Display(Name = "UserName")]
        public string? UserName { get; set; }
      //  [Display(Name = "Email")]
        public string? EmailID { get; set; }
      //  [Display(Name = "Password")]
        public string? Password { get; set; }
       // [Display(Name = "CreatedDate")]       
    }
}
