<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ayo extends CI_Controller {
	public function __construct(){
        parent::__construct();
        $this->load->helper("url");
        //$this->load->model('main_model');
        $this->load->helper("html");

    }



	public function index()
	{
		$this->load->view('common/header');
		$this->load->view('ayohome');
	}
}
