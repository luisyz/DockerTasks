<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class TaskApiTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGetReturnsOk()
    {
      //arrange

      //act
      $response=  $this->get('/api/tasks');
      //assert
      $response->assertStatus(200);
    }

    public function testGetReturnsJSON(){

      $api_response_structure = [
        'data' => [
          'tasks' => []
        ]
      ];

      $response= $this->get('/api/tasks');

      $response->assertJSON($api_response_structure);
    }

    // public function testGetlocalhost()
    // {
    //   //arrange
    //
    //   //act
    //   $response=  $this->get('localhost:8000/api/tasks');
    //   //assert
    //   $response->assertJSON([]);
    // }
}
