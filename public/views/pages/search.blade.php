@extends('layouts.master')
@section('title', 'Search')
@section('content')
<div class="main">
  <div class="main-header">
    <div class="main-header-1">
      <div id="main-header-destination">
      </div>
      <div id="main-header-dates">
      </div>
    </div>
    <div class="main-header-2">
      <ul>
        <a href="/attractions" id="attractions">
          <li>
            <h3>Attractions<h3>
          </li>
        </a>
        <a href="/activities" id="activities">
          <li>
            <h3>Activities<h3>
          </li>
        </a>
        <a href="/media" id="media">
          <li>
            <h3>Media<h3>
          </li>
        </a>
        <a href="/map" id="map">
          <li>
            <h3>Map<h3>
          </li>
        </a>
      </ul>
    </div>
  </div>
  <div class="main-content">
    @yield('search-content')
  </div>
</div>
@stop