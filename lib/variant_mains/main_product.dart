import 'package:flutter/material.dart';
import 'package:flutterapp/resources/app_config.dart';

import '../application.dart';

void main() {
  AppConfig(
    flavor: Flavor.PRODUCTION,
    name: "Product",
    color: Colors.blue,
    values: FlavorValues(
        baseUrl:
            "https://raw.githubusercontent.com/JHBitencourt/ready_to_go/master/lib/json/person_production.json"),
  );
  return runApp(MyApp());
}
