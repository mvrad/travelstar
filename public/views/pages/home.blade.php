@extends('layouts.master')
@section('title', 'Home')
@section('content')
<!-- Home -->
<form id="home" action="/attractions">
  <div>
    <!-- Destination -->
    <label for="destination">Where are you going?</label>
    <input type="text" id="destination" name="destination" placeholder="Destination ex: Paris">
    <input type="text" id="id" name="id" placeholder="Destination ID" readonly="readonly">
  </div>
  <!-- /.Destination -->
  <!-- Dates -->
  <div id="dates-wrapper">
    <label for="dates">When are you going?</label>
    <!-- From -->
    <div>
      <input type="text" id="from" class="dates" name="from" placeholder="From">
    </div>
    <!-- /.From -->
    <!-- To -->
    <div>
      <input type="text" id="to" class="dates" name="to" placeholder="To">
    </div>
    <!-- /.To -->
  </div>
  <!-- /.Dates -->
  <div>
    <input type="submit" id="search" form="home">
  </div>
</form>
<!-- /.Home -->
@stop