using CMSSearchPortalApi.Models;
using JWTAuth.WebApi.Models;

namespace JWTAuth.WebApi.Interface
{
    public interface IGetUserData
    {
        public List<ContactType> GetIContactType();
        public List<Login> GetIAllUser();
        public Login GetSingleUser(string Email);
        public List<CRNSearch> GetCRNSearch(string CRNNumber);
        public List<CRNSearch> GetAllCRNSearch();

    }
}
