<?php

class One_model extends CI_Model
{
    function __construct(){
        parent::__construct();
        echo 'core';
    }

    public function get($table)
    {
        $query = $this->db->get($table);
        return $query->result();
    }

    public function insert($table, $params)
    {
        $this->db->insert($table, $params);
    }

    public function update($table, $params)
    {
        $this->db->update($table, $params);
    }

    public function insert_batch($table, $data)
    {
        $this->db->insert_batch($table, $data);
    }
}