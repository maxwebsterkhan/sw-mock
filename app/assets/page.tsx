"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Plus, Search, Filter, Pencil, Trash2, Info } from "lucide-react";
import AddAssetModal from "../components/AddAssetModal";
import InlineAssetEditor from "../components/InlineAssetEditor";

interface Asset {
  id: string;
  name: string;
  type: string;
  value: number;
  change: number;
  lastUpdated: string;
  currency: string;
  interestRate: number;
  taxClassification: string;
  valueHistory: {
    date: string;
    value: number;
  }[];
}

export default function Assets() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAssetId, setEditingAssetId] = useState<string | null>(null);
  const [assets, setAssets] = useState<Asset[]>([
    {
      id: "1",
      name: "Vanguard S&P 500 ETF",
      type: "ETF",
      value: 50000,
      change: 2.5,
      lastUpdated: "2024-02-20",
      currency: "GBP",
      interestRate: 1.2,
      taxClassification: "ISA - Tax-Free Savings",
      valueHistory: [
        { date: "2023-09-20", value: 45000 },
        { date: "2023-10-20", value: 46200 },
        { date: "2023-11-20", value: 47800 },
        { date: "2023-12-20", value: 48500 },
        { date: "2024-01-20", value: 49200 },
        { date: "2024-02-20", value: 50000 },
      ],
    },
    {
      id: "2",
      name: "Apple Inc.",
      type: "Stock",
      value: 25000,
      change: -1.2,
      lastUpdated: "2024-02-20",
      currency: "USD",
      interestRate: 0.5,
      taxClassification: "Capital - Standard Investment",
      valueHistory: [
        { date: "2023-09-20", value: 28000 },
        { date: "2023-10-20", value: 27500 },
        { date: "2023-11-20", value: 26800 },
        { date: "2023-12-20", value: 26200 },
        { date: "2024-01-20", value: 25300 },
        { date: "2024-02-20", value: 25000 },
      ],
    },
    {
      id: "3",
      name: "UK Government Bonds",
      type: "Bond",
      value: 100000,
      change: 0.8,
      lastUpdated: "2024-02-20",
      currency: "GBP",
      interestRate: 0.3,
      taxClassification: "Pension - Retirement Account",
      valueHistory: [
        { date: "2023-09-20", value: 97500 },
        { date: "2023-10-20", value: 98200 },
        { date: "2023-11-20", value: 98800 },
        { date: "2023-12-20", value: 99200 },
        { date: "2024-01-20", value: 99600 },
        { date: "2024-02-20", value: 100000 },
      ],
    },
  ]);

  const [showTooltip, setShowTooltip] = useState(false);

  const handleAddAsset = (newAsset: {
    name: string;
    type: string;
    value: number;
    change: number;
    currency: string;
    interestRate: number;
    taxClassification: string;
  }) => {
    const currentDate = new Date().toISOString().split("T")[0];
    const asset: Asset = {
      id: Date.now().toString(),
      ...newAsset,
      lastUpdated: currentDate,
      valueHistory: [{ date: currentDate, value: newAsset.value }],
    };
    setAssets([...assets, asset]);
  };

  const handleUpdateAsset = (
    assetId: string,
    updatedAsset: {
      name: string;
      type: string;
      value: number;
      change: number;
      currency: string;
      interestRate: number;
      taxClassification: string;
    }
  ) => {
    const currentDate = new Date().toISOString().split("T")[0];

    setAssets((prevAssets) =>
      prevAssets.map((asset) => {
        if (asset.id === assetId) {
          // Check if value has changed
          const valueChanged = asset.value !== updatedAsset.value;

          // Create new value history entry if value changed
          const newValueHistory = valueChanged
            ? [
                ...asset.valueHistory,
                { date: currentDate, value: updatedAsset.value },
              ]
            : asset.valueHistory;

          return {
            ...asset,
            ...updatedAsset,
            lastUpdated: currentDate,
            valueHistory: newValueHistory,
          };
        }
        return asset;
      })
    );
    setEditingAssetId(null);
  };

  const handleEditCancel = () => {
    setEditingAssetId(null);
  };

  const filteredAssets = assets.filter((asset) =>
    asset.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#0b0a0a] text-white flex flex-col">
      <Navigation />

      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-0 mb-8 md:mb-12 mt-16 md:mt-24">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 opacity-0 animate-fade-in">
              Manage Your
            </h1>
            <h2 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent opacity-0 animate-fade-in-delay">
              Investment Portfolio
            </h2>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 opacity-0 animate-fade-in-delay-2 self-start md:self-auto mt-4 md:mt-0"
          >
            <Plus size={20} />
            Add New Asset
          </button>
        </div>

        <div className="bg-[#1c1c1c] rounded-xl p-6 opacity-0 animate-fade-in-delay-3">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search assets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#2a2a2a] text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
              />
            </div>
            <button className="bg-[#2a2a2a] hover:bg-[#333333] text-white px-4 py-2 rounded-full flex items-center gap-2">
              <Filter size={20} />
              Filter
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-2">
              <thead>
                <tr className="text-left text-gray-400">
                  <th className="pb-4 px-6">Asset Name</th>
                  <th className="pb-4 text-right px-6">Type</th>
                  <th className="pb-4 text-right px-6">Value</th>
                  <th className="pb-4 text-right px-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAssets.map((asset) =>
                  editingAssetId === asset.id ? (
                    <InlineAssetEditor
                      key={asset.id}
                      asset={asset}
                      onSave={(updatedAsset) =>
                        handleUpdateAsset(asset.id, updatedAsset)
                      }
                      onCancel={handleEditCancel}
                    />
                  ) : (
                    <tr key={asset.id} className="bg-[#1c1c1c] rounded-lg mb-2">
                      <td className="py-4 px-6 rounded-l-lg">
                        <div className="font-medium text-white">
                          {asset.name}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400">
                          {asset.type}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right text-white">
                        {asset.currency === "GBP" ? "£" : "$"}
                        {asset.value.toLocaleString()}
                      </td>
                      <td className="py-4 px-6 text-right rounded-r-lg">
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => setEditingAssetId(asset.id)}
                            className="text-blue-400 hover:text-blue-300 p-1.5 rounded-full hover:bg-blue-500/10"
                            aria-label="Edit asset"
                          >
                            <Pencil size={18} />
                          </button>
                          <button
                            className="text-red-400 hover:text-red-300 p-1.5 rounded-full hover:bg-red-500/10"
                            aria-label="Delete asset"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center">
            <div className="relative inline-block">
              <button
                className="text-gray-400 hover:text-blue-400 transition-colors p-1"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={() => setShowTooltip(!showTooltip)}
                aria-label="Information about asset editing"
              >
                <Info size={20} />
              </button>

              {showTooltip && (
                <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-[#2a2a2a] rounded-lg shadow-lg text-sm text-white z-10">
                  <div className="relative">
                    <p>
                      Editing an asset will create a snapshot in time,
                      preserving historical data for performance tracking.
                    </p>
                    <div className="absolute w-3 h-3 bg-[#2a2a2a] transform rotate-45 -bottom-1.5 left-5"></div>
                  </div>
                </div>
              )}
            </div>
            <span className="text-gray-400 text-sm ml-2 flex items-center">
              Asset history is maintained when editing
            </span>
          </div>
        </div>
      </div>

      <AddAssetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddAsset={handleAddAsset}
      />

      <Footer />
    </main>
  );
}
