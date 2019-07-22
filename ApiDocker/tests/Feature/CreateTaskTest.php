<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class CreateTaskTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
     public function testPostReturnsOk()
     {
       //arrange

       //act
       $response=  $this->get('/api/tasks');
       //assert
       $response->assertStatus(201);
     }

     public function testPostReturnsJSON(){

       $api_response_structure = [
         'data' => [
           'tasks' => []
         ]
       ];

       $response= $this->get('/api/tasks');

       $response->assertJSON($api_response_structure);
     }

     public function testPostGet()
     {
       //arrange

       //act

       //assert

     }

     public function testResponseContainsTask()
     {
       //arrange

       //act

       //assert

     }
}
