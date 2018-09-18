<?php
echo"hey hey\n";
defined('BASEPATH') OR exit('No direct script access allowed');

class Ayo extends CI_Controller {
	public function __construct(){
		parent::__construct();
		die ('we here\n');
        //$this->load->helper("url");
        //$this->load->model('main_model');
        //$this->load->helper("html");

    }



	public function index()
	{
		die (" are you there,answer me woman");
		//$this->load->view('common/header.php');
		$this->load->view('ayohome.php');
	}
}
