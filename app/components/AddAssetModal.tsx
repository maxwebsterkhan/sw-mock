"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface AddAssetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAsset: (asset: {
    name: string;
    type: string;
    value: number;
    change: number;
    currency: string;
    interestRate: number;
    taxClassification: string;
  }) => void;
  assetToEdit?: {
    id: string;
    name: string;
    type: string;
    value: number;
    change: number;
    currency: string;
    interestRate: number;
    taxClassification: string;
  };
}

export default function AddAssetModal({
  isOpen,
  onClose,
  onAddAsset,
  assetToEdit,
}: AddAssetModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    type: "Cash Savings",
    value: "",
    change: "",
    currency: "GBP",
    interestRate: "",
    taxClassification: "ISA - Tax-Free Savings",
  });

  useEffect(() => {
    if (assetToEdit) {
      setFormData({
        name: assetToEdit.name,
        type: assetToEdit.type,
        value: assetToEdit.value.toString(),
        change: assetToEdit.change.toString(),
        currency: assetToEdit.currency,
        interestRate: assetToEdit.interestRate.toString(),
        taxClassification: assetToEdit.taxClassification,
      });
    }
  }, [assetToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddAsset({
      name: formData.name,
      type: formData.type,
      value: parseFloat(formData.value),
      change: parseFloat(formData.change),
      currency: formData.currency,
      interestRate: parseFloat(formData.interestRate),
      taxClassification: formData.taxClassification,
    });
    setFormData({
      name: "",
      type: "Cash Savings",
      value: "",
      change: "",
      currency: "GBP",
      interestRate: "",
      taxClassification: "ISA - Tax-Free Savings",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-hidden">
      <div className="bg-[#1c1c1c] rounded-xl p-4 sm:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold pr-2">
            {assetToEdit ? "Edit Asset" : "Add New Asset"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
        >
          <div className="col-span-1 sm:col-span-2 w-full">
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Asset Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-[#2a2a2a] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
              required
            />
          </div>

          <div className="col-span-1 w-full">
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Currency
            </label>
            <input
              type="text"
              value={formData.currency}
              onChange={(e) =>
                setFormData({ ...formData, currency: e.target.value })
              }
              className="w-full bg-[#2a2a2a] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
              required
            />
          </div>

          <div className="col-span-1 w-full">
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Interest Rate (%)
            </label>
            <input
              type="number"
              value={formData.interestRate}
              onChange={(e) =>
                setFormData({ ...formData, interestRate: e.target.value })
              }
              className="w-full bg-[#2a2a2a] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
              required
              step="0.1"
            />
          </div>

          <div className="col-span-1 w-full">
            <label className="block text-sm font-medium text-gray-400 mb-1 truncate">
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
                className="w-full bg-[#2a2a2a] text-white px-4 pr-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 appearance-none"
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

          <div className="col-span-1 w-full">
            <label className="block text-sm font-medium text-gray-400 mb-1 truncate">
              Asset Type
            </label>
            <div className="relative">
              <select
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="w-full bg-[#2a2a2a] text-white px-4 pr-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 appearance-none"
              >
                <option value="Cash Savings">Cash Savings</option>
                <option value="Stocks & Shares">Stocks & Shares</option>
                <option value="Property">Property</option>
                <option value="Cryptocurrency">Cryptocurrency</option>
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

          <div className="col-span-1 w-full">
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Current Market Value (£)
            </label>
            <input
              type="number"
              value={formData.value}
              onChange={(e) =>
                setFormData({ ...formData, value: e.target.value })
              }
              className="w-full bg-[#2a2a2a] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
              required
              min="0"
              step="0.01"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 flex justify-end gap-4 mt-6 w-full">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-full"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              {assetToEdit ? "Update Asset" : "Add Asset"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
