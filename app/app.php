<?php //app.php Driver for slim

  /**
   * GET /
   *
   * Drives the application by serving the backbone index.html page
   *
   */
  $app->get('/', function () use ($app) {
    $app->render('index.html');
  });
  //json request
  $app->get('/test', function () use($app) {
    $response = $app->response();
    $response['Content-Type'] = 'application/json';
    $passed_object = (object) array('id'=>1, 'test'=>'abcd');
    $response->body(json_encode($passed_object));
  });
  
