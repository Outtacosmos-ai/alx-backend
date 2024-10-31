#!/usr/bin/env python3
"""
BasicCache module
"""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """
    BasicCache defines a basic caching system that inherits from BaseCaching.

    This caching system doesn't have a limit on the number of items
    it can store.
    """

    def put(self, key, item):
        """
        Add an item in the cache.

        Args:
            key: The key to store the item under
            item: The item to store

        Returns:
            None
        """
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        """
        Retrieve an item by key.

        Args:
            key: The key to look up

        Returns:
            The value associated with the key if it exists, None otherwise
        """
        if key is not None:
            return self.cache_data.get(key)
        return None
