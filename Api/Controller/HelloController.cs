using Microsoft.AspNetCore.Mvc;
// http://localhost:5066/api/Name

public class HelloController : BaseController
{
    // app.MapGet("/hello/{name}", (string name) => $"Привет, {name}!");
    // http://localhost:5066/api/Name/{name}
    [HttpGet("{name}")]
    public string GetGreetingByName(string name)
    {
        return $"Привет, {name}!";
    }
}