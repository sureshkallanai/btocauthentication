using CMSSearchPortalApi.Models;
using JWTAuth.WebApi.Interface;
using JWTAuth.WebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JWTAuth.WebApi.Repository
{
    public class UserRepository : IGetUserData
    {

        private readonly DatabaseContext _dbContext;

        public UserRepository(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }
      
        public List<ContactType> GetIContactType()
        {
            try
            {
                return _dbContext.ContactType.ToList();
            }
            catch
            {
                throw;
            }
        }

        public List<Login> GetIAllUser()
        {
            try
            {
                return _dbContext.Login.ToList();
            }
            catch
            {
                throw;
            }
        }

        public Login GetSingleUser(string Email)
        {
            try
            {
                return _dbContext.Login.ToList().Where(x => x.EmailID.Equals(Email)).FirstOrDefault();
            }
            catch
            {
                throw;
            }
        }

        public List<CRNSearch> GetCRNSearch(string CRNNumber)
        {
            try
            {
                return _dbContext.CRNSearch.ToList().Where(x => x.CRN.Equals(CRNNumber)).ToList();
            }
            catch
            {
                throw;
            }
        }

        public List<CRNSearch> GetAllCRNSearch()
        {
            try
            {
                return _dbContext.CRNSearch.ToList();
            }
            catch
            {
                throw;
            }
        }        
    }
}
