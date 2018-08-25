@extends('layouts.master')
@section('title', 'Home')
@section('content')
<!-- Home -->
<form id="home" action="/attractions">
  <div>
    <!-- Destination -->
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
    <input id="search" type="submit" form="home" value="Submit">
  </div>
</form>
<!-- /.Home -->
@stop