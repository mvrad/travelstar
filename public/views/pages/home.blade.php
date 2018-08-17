@extends('layouts.master')
@section('title', 'Home')
@section('content')
<!-- Home -->
<div id="home">
  <!-- Destination -->
  <div>
    <h2>Where are you going?</h2>
    <input type="text" id="destination" name="destination" placeholder="Destination">
  </div>
  <!-- /.Destination -->
  <!-- Dates -->
  <h2>When are you going?</h2>
  <div>
    <!-- From -->
    <div>
      <input type="text" id="from" name="from" placeholder="From">
    </div>
    <!-- /.From -->
    <!-- To -->
    <div>
      <input type="text" id="to" name="to" placeholder="To">
    </div>
    <!-- /.To -->
  </div>
  <!-- /.Dates -->
</div>
<!-- /.Home -->
@stop