<?php

class Model extends CI_Model {
    public function get($table)
    {
        $query = $this->db->get($table);
        return $query->result();
    }

    public function insert($table,$params)
    {
        $this->db->insert($table, $params);
    }

    public function update($table, $params)
    {
        $this->db->update($table, $params);
    }
}