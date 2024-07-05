using CMSSearchPortalApi.Models;
using JWTAuth.WebApi.Interface;
using JWTAuth.WebApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JWTAuth.WebApi.Controllers
{
    [Authorize]
  
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IGetUserData _IGetUserData;

        public HomeController(IGetUserData IContactType)
        {
            _IGetUserData = IContactType;
        }
        [Route("api/ContactType")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactType>>> Get()
        {
            return await Task.FromResult(_IGetUserData.GetIContactType());
        }
        [Route("api/GetAllUser")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Login>>> GetAllUser()
        {
            return await Task.FromResult(_IGetUserData.GetIAllUser());
        }
        [Route("api/GetSingleUser")]
        [HttpGet]
        public async Task<ActionResult<Login>> GetSingleUser(string Email)
        {
            return await Task.FromResult(_IGetUserData.GetSingleUser(Email));
        }

        [Route("api/CRNSearch")]
        [HttpGet]
        public async Task<ActionResult<List<CRNSearch>>> GetCRNSearch(string CRNNumber)
        {
            return await Task.FromResult(_IGetUserData.GetCRNSearch(CRNNumber));
        }
        [Route("api/GetAllCRNSearch")]
        [HttpGet]
        public async Task<ActionResult<List<CRNSearch>>> GetAllCRNSearch()
        {
            return await Task.FromResult(_IGetUserData.GetAllCRNSearch());
        }

    }
}
