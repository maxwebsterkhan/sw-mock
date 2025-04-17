"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";
import ValueHistoryGraph from "./ValueHistoryGraph";

interface InlineAssetEditorProps {
  asset: {
    id: string;
    name: string;
    type: string;
    value: number;
    change: number;
    currency: string;
    interestRate: number;
    taxClassification: string;
    valueHistory: {
      date: string;
      value: number;
    }[];
  };
  onSave: (asset: {
    name: string;
    type: string;
    value: number;
    change: number;
    currency: string;
    interestRate: number;
    taxClassification: string;
  }) => void;
  onCancel: () => void;
}

export default function InlineAssetEditor({
  asset,
  onSave,
  onCancel,
}: InlineAssetEditorProps) {
  const [formData, setFormData] = useState({
    name: asset.name,
    type: asset.type,
    value: asset.value.toString(),
    change: asset.change.toString(),
    currency: asset.currency,
    interestRate: asset.interestRate.toString(),
    taxClassification: asset.taxClassification,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      name: formData.name,
      type: formData.type,
      value: parseFloat(formData.value),
      change: parseFloat(formData.change),
      currency: formData.currency,
      interestRate: parseFloat(formData.interestRate),
      taxClassification: formData.taxClassification,
    });
  };

  return (
    <tr className="bg-[#2a2a2a]">
      <td colSpan={4} className="py-4 px-4 rounded-xl border-b border-white/10">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic details section */}
          <div className="bg-[#1c1c1c] rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Basic Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1 pl-2">
                  Asset Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#333333] text-white px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Tax Classification
                </label>
                <div className="relative">
                  <select
                    value={formData.taxClassification}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        taxClassification: e.target.value,
                      })
                    }
                    className="w-full bg-[#333333] text-white px-6 pr-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 appearance-none"
                  >
                    <option value="ISA - Tax-Free Savings">
                      ISA - Tax-Free Savings
                    </option>
                    <option value="Pension - Retirement Account">
                      Pension - Retirement Account
                    </option>
                    <option value="Capital - Standard Investment">
                      Capital - Standard Investment
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Asset details section */}
          <div className="bg-[#1c1c1c] rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Asset Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Asset Type
                </label>
                <div className="relative">
                  <select
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                    className="w-full bg-[#333333] text-white px-6 pr-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 appearance-none"
                  >
                    <option value="Cash Savings">Cash Savings</option>
                    <option value="Stocks & Shares">Stocks & Shares</option>
                    <option value="Property">Property</option>
                    <option value="Cryptocurrency">Cryptocurrency</option>
                    <option value="ETF">ETF</option>
                    <option value="Stock">Stock</option>
                    <option value="Bond">Bond</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Historical Return
                </label>
                <div className="flex">
                  <input
                    type="number"
                    value={formData.change}
                    onChange={(e) =>
                      setFormData({ ...formData, change: e.target.value })
                    }
                    className="w-full bg-[#333333] text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
                    step="0.1"
                  />
                  <div className="bg-[#333333] text-gray-400 px-4 py-2 rounded-r-lg border-l border-gray-700 flex items-center">
                    %
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Currency
                </label>
                <input
                  type="text"
                  value={formData.currency}
                  onChange={(e) =>
                    setFormData({ ...formData, currency: e.target.value })
                  }
                  className="w-full bg-[#333333] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  value={formData.interestRate}
                  onChange={(e) =>
                    setFormData({ ...formData, interestRate: e.target.value })
                  }
                  className="w-full bg-[#333333] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
                  required
                  step="0.1"
                />
              </div>
            </div>
          </div>

          {/* Value History section */}
          <div className="bg-[#1c1c1c] rounded-xl p-6 border border-gray-800 w-full max-w-full overflow-hidden">
            <ValueHistoryGraph
              history={asset.valueHistory}
              currency={asset.currency}
            />
          </div>

          {/* Asset Value section */}
          <div className="bg-[#1c1c1c] rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Asset Value
            </h3>
            <p className="text-gray-400 mb-4">
              Enter a new value to update today&apos;s asset value
            </p>
            <div className="flex">
              <div className="bg-[#333333] text-white px-4 py-2 rounded-l-lg border-r border-gray-700 flex items-center">
                {formData.currency === "GBP" ? "£" : "$"}
              </div>
              <input
                type="number"
                value={formData.value}
                onChange={(e) =>
                  setFormData({ ...formData, value: e.target.value })
                }
                className="w-full bg-[#333333] text-white px-4 py-2 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
                required
                min="0"
                step="0.01"
              />
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Current value: {formData.currency === "GBP" ? "£" : "$"}
              {parseFloat(asset.value.toString()).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex items-center gap-1 px-4 py-2 text-gray-300 hover:text-white transition-colors hover:bg-white/10 rounded-full"
            >
              <X size={18} /> Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              <Check size={18} /> Save All Changes
            </button>
          </div>
        </form>
      </td>
    </tr>
  );
}
