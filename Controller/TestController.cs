using Microsoft.AspNetCore.Mvc;

// http://localhost:5066/api/Test
[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    // app.MapGet("/test", () => "Hello World!");
    // http://localhost:5066/api/Test/test
    [HttpGet("test")]
    public string GetHelloWorldText()
    {
        return "Hello World2!";
    }

    // app.MapGet("/hello/{name}", (string name) => $"Привет, {name}!");
    // http://localhost:5066/api/Test/hello/{name}
    [HttpGet("hello/{name}")]
    public string GetGreetingByName(string name)
    {
        return $"Привет, {name}!";
    }
}