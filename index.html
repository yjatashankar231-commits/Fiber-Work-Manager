<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Service & Installation Log System</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="bg-gray-50 font-sans text-gray-800">

    <div class="flex h-screen overflow-hidden">
        
        <div class="w-64 bg-slate-900 text-white flex flex-col justify-between hidden md:flex">
            <div class="p-5">
                <h1 class="text-xl font-bold tracking-wider flex items-center gap-2">
                    <i class="fa-solid fa-network-wired text-indigo-400"></i> FieldOps Pro
                </h1>
                <nav class="mt-10 space-y-3">
                    <a href="#" class="flex items-center gap-3 px-4 py-3 bg-indigo-600 text-white rounded-lg transition">
                        <i class="fa-solid fa-pen-to-square"></i> Manual Entry
                    </a>
                </nav>
            </div>
            <div class="p-5 border-t border-slate-800 text-xs text-slate-400">
                Logged in as Field Executive
            </div>
        </div>

        <div class="flex-1 flex flex-col overflow-y-auto">
            
            <header class="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
                <h2 class="text-xl font-semibold text-gray-800">New Activity Log Entry</h2>
                <button onclick="exportToExcel()" class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow transition cursor-pointer">
                    <i class="fa-solid fa-file-excel"></i> Export All to Excel
                </button>
            </header>

            <main class="p-6 max-w-5xl w-full mx-auto space-y-6">
                
                <form id="logForm" onsubmit="handleFormSubmit(event)" class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
                    
                    <div>
                        <h3 class="text-md font-semibold text-indigo-600 border-b border-gray-100 pb-2 mb-4">
                            <i class="fa-solid fa-briefcase mr-1"></i> 1. Work & Company Details
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Installation Company Name</label>
                                <input type="text" id="installCompany" required placeholder="Enter company doing installation" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Complaint/Client Company Name</label>
                                <input type="text" id="complaintCompany" required placeholder="Enter client/complaint company" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-md font-semibold text-indigo-600 border-b border-gray-100 pb-2 mb-4">
                            <i class="fa-solid fa-file-lines mr-1"></i> 2. Manual Write-ups
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Installation Manual Notes / Details</label>
                                <textarea id="installManual" rows="4" required placeholder="Type all installation steps, hardware used, or manual details here..." class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Site Restore Manual Notes / Details</label>
                                <textarea id="restoreManual" rows="4" required placeholder="Type site restoration process, link status, or manual logs here..." class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-md font-semibold text-indigo-600 border-b border-gray-100 pb-2 mb-4">
                            <i class="fa-solid fa-route mr-1"></i> 3. Travel Log (Side to Side)
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">From (Start Side/Location)</label>
                                <input type="text" id="travelFrom" required placeholder="e.g., Side A / Office" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">To (Destination Side/Location)</label>
                                <input type="text" id="travelTo" required placeholder="e.g., Side B / Client Site" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Distance Traveled (Kilometers)</label>
                                <div class="relative">
                                    <input type="number" id="distanceKm" step="0.1" required placeholder="0.0" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10">
                                    <span class="absolute right-3 top-2.5 text-gray-400 text-sm font-medium">KM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-md font-semibold text-indigo-600 border-b border-gray-100 pb-2 mb-4">
                            <i class="fa-solid fa-camera mr-1"></i> 4. Media Upload
                        </h3>
                        <div class="w-full">
                            <label class="block text-sm font-medium text-gray-700 mb-1">Upload Site / Work Photos</label>
                            <div class="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-50 transition relative">
                                <input type="file" id="sitePhotos" multiple accept="image/*" class="absolute inset-0 w
