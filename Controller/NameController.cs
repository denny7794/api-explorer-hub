using Microsoft.AspNetCore.Mvc;

// http://localhost:5066/api/Name
[ApiController]
[Route("api/[controller]")]
public class NameController : ControllerBase
{
    // app.MapGet("/hello/{name}", (string name) => $"Привет, {name}!");
    // http://localhost:5066/api/Name/{name}
    [HttpGet("{name}")]
    public string GetGreetingByName(string name)
    {
        return $"Привет, {name}!";
    }
}