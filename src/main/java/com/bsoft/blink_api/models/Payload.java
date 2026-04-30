package com.bsoft.blink_api.models;

public record Payload<T>(int status, T data) {}
