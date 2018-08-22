@extends('layouts.master')
@section('title', 'Home')
@section('content')
<!-- Home -->
<!-- <form id="home" method="GET" action=""> -->
<form id="home">
  <!-- Destination -->
  <div>
    <label for="destination">Where are you going?</label>
    <input type="text" id="destination" name="destination" placeholder="Destination">
    <div class="dropdown">
      <ul class="dropdown-list">
        <li class="list-name" id="name-1"></li>
        <li class="list-name" id="name-2"></li>
        <li class="list-name" id="name-3"></li>
        <li class="list-name" id="name-4"></li>
        <li class="list-name" id="name-5"></li>
      </ul>
    </div>
  </div>
  <!-- /.Destination -->
  <!-- Dates -->
  <div id="dates-wrapper">
    <label for="dates">When are you going?</label>
    <!-- From -->
    <div>
      <input type="text" id="from" class="dates" name="dates" placeholder="From">
    </div>
    <!-- /.From -->
    <!-- To -->
    <div>
      <input type="text" id="to" class="dates" name="dates" placeholder="To">
    </div>
    <!-- /.To -->
  </div>
  <!-- /.Dates -->
  <div>
    <input id="search" type="submit" value="Submit">
  </div>
</form>
<!-- /.Home -->
@stop