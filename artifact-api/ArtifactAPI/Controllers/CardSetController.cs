using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ArtifactAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CardsetController : ControllerBase
    {
        private static readonly HttpClient client = new HttpClient();

        // GET api/cardset
        [HttpGet]
        public string GetCardsetInformation(string deckType)
        {
            var url = "https://playartifact.com/";
            var data = client.GetAsync(url + "cardset/" + deckType).Result.Content.ReadAsStringAsync().Result;

            return data;
        }

        [HttpPost]
        public string GetDeckFromCdn(Cdn cdn)
        {
            var data = client.GetAsync(cdn.cdn_root + cdn.url).Result.Content.ReadAsStringAsync().Result;

            return data;
        }
    }
}
    