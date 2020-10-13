package com.simple.personalhelpapps.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DailyHelpController {

    @GetMapping("/")
    public String getHomePage() {
        return "homepage";
    }

    @GetMapping("/calculator")
    public String loadCalculator() {
        return "calculator";
    }
}
