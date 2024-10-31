#!/usr/bin/env python3
"""LRU caching module"""

from base_caching import BaseCaching


class LRUCache(BaseCaching):
    """LRU caching system"""

    def __init__(self):
        """Initialize the cache"""
        super().__init__()
        self.usage_order = []

    def put(self, key, item):
        """
        Add an item in the cache
        """
        if key is not None and item is not None:
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                if key not in self.cache_data:
                    discarded = self.usage_order.pop(0)
                    del self.cache_data[discarded]
                    print(f"DISCARD: {discarded}")

            self.cache_data[key] = item
            if key in self.usage_order:
                self.usage_order.remove(key)
            self.usage_order.append(key)

    def get(self, key):
        """
        Get an item by key
        """
        if key in self.cache_data:
            self.usage_order.remove(key)
            self.usage_order.append(key)
        return self.cache_data.get(key)
